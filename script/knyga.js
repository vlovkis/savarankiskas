var knyga = 
{ pavadinimas: "Informatika", 
  autorius: 'Vitalijus.L', 
  puslapiai: '666', 
  leid_data:'2021', 
  kaina:'50 eurasiku', 
  isleidimo_viet: 'Klaipeda',  };
    
    document.getElementById('knyga').innerHTML = 'Knygos padavinimas:' + knyga.pavadinimas + '</br>' 
    + 'Knygos autorius:' + knyga.autorius + '</br>' + 'Knygos puslapiai:' + knyga.puslapiai + '</br>' + 
    'Leidimo data:' + knyga.leid_data + '</br>' + 'Knygos kaina:' + knyga.kaina + '</br>' + 
    'Knygos leidimo vieta:' + knyga.isleidimo_viet;