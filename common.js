
// Shared rendering helpers
function uniqueSorted(arr){ return [...new Set(arr)].sort(); }

function hydrateFilters(list, withType=false){
  const stateSelect = document.getElementById('stateFilter');
  uniqueSorted(list.map(i=>i.state)).forEach(s=>{
    const o=document.createElement('option'); o.value=s; o.textContent=s; stateSelect.appendChild(o);
  });
  if(withType){
    const typeSelect = document.getElementById('typeFilter');
    uniqueSorted(list.map(i=>i.type)).forEach(t=>{
      const o=document.createElement('option'); o.value=t; o.textContent=t; typeSelect.appendChild(o);
    });
  }
}

function renderByCategories(target, data, categories){
  target.innerHTML='';
  categories.forEach(cat=>{
    const block = data.filter(d=>d.type===cat.key);
    if(!block.length) return;
    const section = document.createElement('section');
    section.className='category-row';
    section.innerHTML = `
      <div class="row-header">
        <div class="row-title">${cat.title} (${block.length})</div>
      </div>
    `;
    const row = document.createElement('div');
    row.className='row-wrap';
    block.forEach(m=>{
      const a=document.createElement('a');
      a.href=m.website || '#'; a.target='_blank'; a.className='card';
      a.innerHTML = `
        <div class="name">${m.rank ? ('#'+m.rank+'. ') : ''}${m.name}</div>
        <div class="small">${m.city || ''}${m.city?', ':''}${m.state || ''}</div>
      `;
      row.appendChild(a);
    });
    section.appendChild(row);
    target.appendChild(section);
  });
}

function makeFilterHandlers(sourceList, categories, outputEl){
  const searchInput = document.getElementById('searchInput');
  const stateSelect = document.getElementById('stateFilter');
  const typeSelect = document.getElementById('typeFilter'); // optional

  function apply(){
    const q = (searchInput?.value || '').toLowerCase();
    const st = stateSelect?.value || 'all';
    const ty = typeSelect?.value || 'all';
    const filtered = sourceList.filter(i=>{
      let ok = true;
      if(st!=='all') ok = ok && i.state===st;
      if(ty!=='all' && i.type) ok = ok && i.type===ty;
      if(q) ok = ok && (i.name + (i.city||'') + (i.state||'')).toLowerCase().includes(q);
      return ok;
    });
    renderByCategories(outputEl, filtered, categories);
  }
  if(searchInput) searchInput.oninput = apply;
  if(stateSelect) stateSelect.onchange = apply;
  if(typeSelect) typeSelect.onchange = apply;
  // initial
  apply();
}
