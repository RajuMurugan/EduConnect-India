
const stateUniversities = [
  // ANDHRA PRADESH
  {name:'Jawaharlal Nehru Technological University, Anantapur (JNTUA)', type:'State University', state:'Andhra Pradesh', city:'Anantapur', website:'https://www.jntua.ac.in'},
  {name:'Jawaharlal Nehru Technological University, Kakinada (JNTUK)', type:'State University', state:'Andhra Pradesh', city:'Kakinada', website:'https://www.jntuk.edu.in'},
  {name:'Andhra University', type:'State University', state:'Andhra Pradesh', city:'Visakhapatnam', website:'https://www.andhrauniversity.edu.in'},
  {name:'Sri Venkateswara University', type:'State University', state:'Andhra Pradesh', city:'Tirupati', website:'https://svuniversity.edu.in'},

  // TELANGANA
  {name:'Jawaharlal Nehru Technological University Hyderabad (JNTUH)', type:'State University', state:'Telangana', city:'Hyderabad', website:'https://jntuh.ac.in'},
  {name:'Osmania University', type:'State University', state:'Telangana', city:'Hyderabad', website:'https://www.osmania.ac.in'},
  {name:'Kakatiya University', type:'State University', state:'Telangana', city:'Warangal', website:'https://kakatiya.ac.in'},

  // TAMIL NADU
  {name:'Anna University', type:'State University', state:'Tamil Nadu', city:'Chennai', website:'https://www.annauniv.edu'},
  {name:'Annamalai University', type:'State University', state:'Tamil Nadu', city:'Chidambaram', website:'https://www.annamalaiuniversity.ac.in'},

  // KARNATAKA
  {name:'Visvesvaraya Technological University (VTU)', type:'State University', state:'Karnataka', city:'Belagavi', website:'https://vtu.ac.in'},

  // KERALA
  {name:'APJ Abdul Kalam Technological University (KTU)', type:'State University', state:'Kerala', city:'Thiruvananthapuram', website:'https://ktu.edu.in'},
  {name:'Cochin University of Science and Technology (CUSAT)', type:'State University', state:'Kerala', city:'Kochi', website:'https://cusat.ac.in'},

  // MAHARASHTRA
  {name:'Dr. Babasaheb Ambedkar Technological University (DBATU)', type:'State University', state:'Maharashtra', city:'Lonere', website:'https://dbatu.ac.in'},
  {name:'Savitribai Phule Pune University', type:'State University', state:'Maharashtra', city:'Pune', website:'https://unipune.ac.in'},
  {name:'Rashtrasant Tukadoji Maharaj Nagpur University', type:'State University', state:'Maharashtra', city:'Nagpur', website:'https://nagpuruniversity.ac.in'},
  {name:'University of Mumbai', type:'State University', state:'Maharashtra', city:'Mumbai', website:'https://mu.ac.in'},
  {name:'Shivaji University, Kolhapur', type:'State University', state:'Maharashtra', city:'Kolhapur', website:'https://www.unishivaji.ac.in'},
  {name:'Sant Gadge Baba Amravati University', type:'State University', state:'Maharashtra', city:'Amravati', website:'https://www.sgbau.ac.in'},

  // GUJARAT
  {name:'Gujarat Technological University (GTU)', type:'State University', state:'Gujarat', city:'Ahmedabad', website:'https://www.gtu.ac.in'},
  {name:'The Maharaja Sayajirao University of Baroda', type:'State University', state:'Gujarat', city:'Vadodara', website:'https://msubaroda.ac.in'},
  {name:'Dharmsinh Desai University', type:'State University', state:'Gujarat', city:'Nadiad', website:'https://www.ddu.ac.in'},

  // RAJASTHAN
  {name:'Rajasthan Technical University (RTU)', type:'State University', state:'Rajasthan', city:'Kota', website:'https://www.rtu.ac.in'},
  {name:'Bikaner Technical University (BTU)', type:'State University', state:'Rajasthan', city:'Bikaner', website:'https://www.btu.ac.in'},
  {name:'MBM University, Jodhpur', type:'State University', state:'Rajasthan', city:'Jodhpur', website:'https://www.mbm.ac.in'},

  // MADHYA PRADESH
  {name:'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)', type:'State University', state:'Madhya Pradesh', city:'Bhopal', website:'https://www.rgpv.ac.in'},
  {name:'Devi Ahilya Vishwavidyalaya (DAVV)', type:'State University', state:'Madhya Pradesh', city:'Indore', website:'https://www.dauniv.ac.in'},

  // UTTAR PRADESH
  {name:'Dr. A.P.J. Abdul Kalam Technical University (AKTU)', type:'State University', state:'Uttar Pradesh', city:'Lucknow', website:'https://aktu.ac.in'},
  {name:'Harcourt Butler Technical University (HBTU)', type:'State University', state:'Uttar Pradesh', city:'Kanpur', website:'https://www.hbtu.ac.in'},
  {name:'Madan Mohan Malaviya University of Technology (MMMUT)', type:'State University', state:'Uttar Pradesh', city:'Gorakhpur', website:'https://www.mmmut.ac.in'},
  {name:'Bundelkhand University', type:'State University', state:'Uttar Pradesh', city:'Jhansi', website:'https://www.bujhansi.ac.in'},

  // BIHAR
  {name:'Bihar Engineering University (BEU)', type:'State University', state:'Bihar', city:'Patna', website:'https://beu-bih.ac.in'},
  {name:'Aryabhatta Knowledge University (AKU)', type:'State University', state:'Bihar', city:'Patna', website:'https://akubihar.ac.in'},

  // JHARKHAND
  {name:'Jharkhand University of Technology (JUT)', type:'State University', state:'Jharkhand', city:'Ranchi', website:'https://jutranchi.ac.in'},

  // ODISHA
  {name:'Biju Patnaik University of Technology (BPUT)', type:'State University', state:'Odisha', city:'Rourkela', website:'https://www.bput.ac.in'},
  {name:'Veer Surendra Sai University of Technology (VSSUT)', type:'State University', state:'Odisha', city:'Burla (Sambalpur)', website:'https://www.vssut.ac.in'},

  // CHHATTISGARH
  {name:'Chhattisgarh Swami Vivekanand Technical University (CSVTU)', type:'State University', state:'Chhattisgarh', city:'Bhilai', website:'https://csvtu.ac.in'},

  // WEST BENGAL
  {name:'Maulana Abul Kalam Azad University of Technology (MAKAUT)', type:'State University', state:'West Bengal', city:'Kolkata', website:'https://makautwb.ac.in'},
  {name:'Jadavpur University', type:'State University', state:'West Bengal', city:'Kolkata', website:'https://www.jaduniv.edu.in'},
  {name:'University of Calcutta', type:'State University', state:'West Bengal', city:'Kolkata', website:'https://www.caluniv.ac.in'},

  // ASSAM
  {name:'Assam Science and Technology University (ASTU)', type:'State University', state:'Assam', city:'Guwahati', website:'https://astu.ac.in'},
  {name:'Gauhati University', type:'State University', state:'Assam', city:'Guwahati', website:'https://www.gauhati.ac.in'},
  {name:'Dibrugarh University', type:'State University', state:'Assam', city:'Dibrugarh', website:'https://dibru.ac.in'},

  // GOA
  {name:'Goa University', type:'State University', state:'Goa', city:'Taleigao (Panaji)', website:'https://www.unigoa.ac.in'},

  // PUNJAB
  {name:'I.K. Gujral Punjab Technical University (IKGPTU)', type:'State University', state:'Punjab', city:'Kapurthala/Jalandhar', website:'https://ptu.ac.in'},
  {name:'Guru Nanak Dev University (GNDU)', type:'State University', state:'Punjab', city:'Amritsar', website:'https://www.gndu.ac.in'},
  {name:'Punjabi University', type:'State University', state:'Punjab', city:'Patiala', website:'https://www.punjabiuniversity.ac.in'},

  // HARYANA
  {name:'Deenbandhu Chhotu Ram University of Science & Technology (DCRUST)', type:'State University', state:'Haryana', city:'Murthal (Sonepat)', website:'https://www.dcrustm.ac.in'},
  {name:'Guru Jambheshwar University of Science & Technology (GJUST)', type:'State University', state:'Haryana', city:'Hisar', website:'https://www.gjust.ac.in'},
  {name:'JC Bose University of Science and Technology, YMCA', type:'State University', state:'Haryana', city:'Faridabad', website:'https://jcboseust.ac.in'},

  // HIMACHAL PRADESH
  {name:'Himachal Pradesh Technical University (HPTU)', type:'State University', state:'Himachal Pradesh', city:'Hamirpur', website:'https://www.himtu.ac.in'},

  // UTTARAKHAND
  {name:'Veer Madho Singh Bhandari Uttarakhand Technical University (VMSBUTU)', type:'State University', state:'Uttarakhand', city:'Dehradun', website:'https://uktech.ac.in'},
  {name:'Govind Ballabh Pant University of Agriculture & Technology (GBPUAT)', type:'State University', state:'Uttarakhand', city:'Pantnagar', website:'https://www.gbpuat.ac.in'},

  // JAMMU & KASHMIR
  {name:'Islamic University of Science and Technology (IUST)', type:'State University', state:'Jammu & Kashmir', city:'Awantipora', website:'https://www.iust.ac.in'},
  {name:'Baba Ghulam Shah Badshah University (BGSBU)', type:'State University', state:'Jammu & Kashmir', city:'Rajouri', website:'https://www.bgsbu.ac.in'},

  // DELHI (NCT)
  {name:'Delhi Technological University (DTU)', type:'State University', state:'Delhi', city:'New Delhi', website:'https://www.dtu.ac.in'},
  {name:'Netaji Subhas University of Technology (NSUT)', type:'State University', state:'Delhi', city:'New Delhi', website:'https://www.nsut.ac.in'},
  {name:'Indira Gandhi Delhi Technical University for Women (IGDTUW)', type:'State University', state:'Delhi', city:'New Delhi', website:'https://www.igdtuw.ac.in'},
  {name:'Guru Gobind Singh Indraprastha University (GGSIPU)', type:'State University', state:'Delhi', city:'New Delhi', website:'https://www.ipu.ac.in'},

  // PUDUCHERRY (UT)
  {name:'Puducherry Technological University (PTU)', type:'State University', state:'Puducherry', city:'Puducherry', website:'https://ptu.edu.in'},

  // UTTARAKHAND/HP/NE small or special-focus additions (where engineering presence is notable)
  // (Already covered above for these states)
];
