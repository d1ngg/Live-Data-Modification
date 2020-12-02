var database = [];


async function loadData(){
    const response = await fetch('http://localhost:3000/medicalrecords');
    const medicalrecords = await response.json();
    return medicalrecords;
}

document.addEventListener("DOMContentLoaded", async() =>{
    let medicalrecords = [];
    let carcinomaDistribution = {'present': 0, 'absent':0};
    try{
        medicalrecords = await loadData();
    } catch(e){
        console.log("Error");
        console.log(e);
    }
    console.log(medicalrecords);

    function getCarcinomaDistribution(object){
        for (var i = 0; i < medicalrecords.length; i++) {
            console.log(medicalrecords[i]['carcinoma']);
            var carcinoma = medicalrecords[i]["carcinoma"];
            if (carcinoma === "present") {
                object['present'] += 1;
            }
            else {
                object['absent'] += 1;
            }
        }
    }
    
    getCarcinomaDistribution(carcinomaDistribution);
    console.log(carcinomaDistribution);

    //console.log(medicalrecords);
})

// function getData(){ //this method is used to fetch data from the back-end database
//     fetch('http://localhost:3000/medicalrecords')
//     .then(response => response.json())
//     .then(data => this.database = data)
//     .then(() => console.log(this.database));
//     // .then( function(json){
//     //     return json; //calling and passing json to another function data_function
//     //     });

// }

// getData();
// console.log(this.database);

// //let alcoholism,vh_amn,hepatotoxic,THepatitis,hospital,surgery,gallstones,choledocholithotomy,injections,transfusion,ChHepatitis,sex,age,PBC,fibrosis,diabetes,obesity,Steatosis,Cirrhosis,Hyperbilirubinemia,triglycerides,RHepatitis,fatigue,bilirubin,itching,upper_pain,fat,pain_ruq,pressure_ruq,phosphatase,skin,ama,le_cells,joints,pain,proteins,edema,platelet,inr,bleeding,flatulence,alcohol,encephalopathy,urea,ascites,hepatomegaly,hepatalgia,density,ESR,alt,ast,amylase,ggtp,cholesterol,hbsag,hbsag_anti,anorexia,nausea,spleen,consciousness,spiders,jaundice,albumin,edge,irregular_liver,hbc_anti,hcv_anti,palms,hbeag,carcinoma;
