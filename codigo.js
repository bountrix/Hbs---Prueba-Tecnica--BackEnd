const clients = [
{ id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
{ id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
{ id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
{ id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
{ id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
{ id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
{ id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
{ id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
{ id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" },
];
const banks = [
{ id: 1, name: 'SCOTIABANK' },
{ id: 2, name: 'BCI' },
{ id: 3, name: 'ITAU' },
{ id: 4, name: 'CONDELL' },
];
const accounts = [
{ clientId: 4, bankId: 1, balance: 79069 },
{ clientId: 6, bankId: 3, balance: 136060 },
{ clientId: 9, bankId: 3, balance: 74908 },
{ clientId: 2, bankId: 2, balance: 4391 },
{ clientId: 6, bankId: 2, balance: 116707 },
{ clientId: 1, bankId: 3, balance: 157627 },
{ clientId: 5, bankId: 4, balance: 136372 },
{ clientId: 7, bankId: 4, balance: 190204 },
{ clientId: 5, bankId: 4, balance: 149670 },
{ clientId: 2, bankId: 3, balance: 143321 },
{ clientId: 2, bankId: 4, balance: 67466 },
{ clientId: 2, bankId: 3, balance: 17956 },
{ clientId: 9, bankId: 2, balance: 43194 },
{ clientId: 5, bankId: 1, balance: 52245 },
{ clientId: 6, bankId: 2, balance: 41562 },
{ clientId: 3, bankId: 2, balance: 138046 },
{ clientId: 6, bankId: 3, balance: 196964 },
{ clientId: 8, bankId: 3, balance: 73803 },
{ clientId: 9, bankId: 2, balance: 150402 },
{ clientId: 7, bankId: 1, balance: 122869 },
{ clientId: 5, bankId: 4, balance: 65223 },
{ clientId: 7, bankId: 3, balance: 143589 },
{ clientId: 9, bankId: 3, balance: 43346 },
{ clientId: 2, bankId: 1, balance: 60421 },
{ clientId: 4, bankId: 4, balance: 184110 },
{ clientId: 8, bankId: 4, balance: 195903 },
{ clientId: 5, bankId: 2, balance: 77649 },
{ clientId: 8, bankId: 4, balance: 28170 },
{ clientId: 5, bankId: 1, balance: 132850 },
{ clientId: 1, bankId: 3, balance: 139679 },
{ clientId: 7, bankId: 4, balance: 119808 },
{ clientId: 4, bankId: 4, balance: 109201 },
{ clientId: 9, bankId: 3, balance: 112529 },
{ clientId: 1, bankId: 3, balance: 137914 },
{ clientId: 6, bankId: 2, balance: 122904 },
{ clientId: 5, bankId: 4, balance: 103142 },
{ clientId: 8, bankId: 2, balance: 69163 },
{ clientId: 2, bankId: 4, balance: 57812 },
{ clientId: 2, bankId: 3, balance: 32851 },
{ clientId: 7, bankId: 1, balance: 109763 },
{ clientId: 8, bankId: 3, balance: 147442 },
{ clientId: 9, bankId: 1, balance: 42217 },
{ clientId: 1, bankId: 1, balance: 39658 },
{ clientId: 6, bankId: 2, balance: 8664 },
{ clientId: 8, bankId: 1, balance: 41915 },
{ clientId: 7, bankId: 1, balance: 31879 },
{ clientId: 7, bankId: 4, balance: 117795 },
{ clientId: 1, bankId: 4, balance: 108862 },
{ clientId: 5, bankId: 1, balance: 18550 },
];




function ejercicio0(){ 
	idBuscar = prompt("ingrese id de cliente");
	for(clientes in clients){
 	for(i = 0; i <= idBuscar ;i++){
 			if (idBuscar == clients[clientes]["id"]) 
 				{
 					console.log(clients[clientes]["rut"],clients[clientes]["name"]);

 				};
 			break;
 		};
 	};
};


function ejercicio1(){ 
	for(clientes in clients){
			clients.sort((a,b)=>{
				if (a.rut > b.rut){
					return 1;
				};
				if (a.rut < b.rut) {
					return	-1;
				};
				return 0;
			})
		console.log(clients[clientes]["id"],clients[clientes]["rut"],clients[clientes]["name"]);
 	};
};



 function ejercicio2(){ 
	let balanceTotal1 = 0;
	let balanceTotal2 = 0;
	let balanceTotal3 = 0;
	let balanceTotal4 = 0;
	let balanceTotal5 = 0;
	let balanceTotal6 = 0;
	let balanceTotal7 = 0;
	let balanceTotal8 = 0;
	let balanceTotal9 = 0;

	let nombreCliente1 = "";
	let nombreCliente2 = "";
	let nombreCliente3 = "";
	let nombreCliente4 = "";
	let nombreCliente5 = "";
	let nombreCliente6 = "";
	let nombreCliente7 = "";
	let nombreCliente8 = "";
	let nombreCliente9 = "";

	for (clientes in accounts){
		if (accounts[clientes]["clientId"] == 1) {
			balanceTotal1 = balanceTotal1 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 2) {
			balanceTotal2 = balanceTotal2 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 3) {
			balanceTotal3 = balanceTotal3 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 4) {
			balanceTotal4 = balanceTotal4 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 5) {
			balanceTotal5 = balanceTotal5 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 6) {
			balanceTotal6 = balanceTotal6 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 7) {
			balanceTotal7 = balanceTotal7 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 8) {
			balanceTotal8 = balanceTotal8 + accounts[clientes]["balance"];
		}
		if (accounts[clientes]["clientId"] == 9) {
			balanceTotal9 = balanceTotal9 + accounts[clientes]["balance"];
		}
	};


	for(clientes in clients){
		if (clients[clientes]["id"]==1){
			nombreCliente1=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==2){
			nombreCliente2=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==3){
			nombreCliente3=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==4){
			nombreCliente4=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==5){
			nombreCliente5=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==6){
			nombreCliente6=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==7){
			nombreCliente7=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==8){
			nombreCliente8=clients[clientes]["name"];
		}
		if (clients[clientes]["id"]==9){
			nombreCliente9=clients[clientes]["name"];
		}
	}
	clientesBalan1 = balanceTotal1+" "+nombreCliente1;
	clientesBalan2 = balanceTotal2+" "+nombreCliente2;
	clientesBalan3 = balanceTotal3+" "+nombreCliente3;
	clientesBalan4 = balanceTotal4+" "+nombreCliente4;
	clientesBalan5 = balanceTotal5+" "+nombreCliente5;
	clientesBalan6 = balanceTotal6+" "+nombreCliente6;
	clientesBalan7 = balanceTotal7+" "+nombreCliente7;
	clientesBalan8 = balanceTotal8+" "+nombreCliente8;
	clientesBalan9 = balanceTotal9+" "+nombreCliente9;
	
	const clientesBalan = [clientesBalan1, clientesBalan2, clientesBalan3, clientesBalan4, clientesBalan5, clientesBalan6, clientesBalan7, clientesBalan8, clientesBalan9] 
	let clientesBalanOr = clientesBalan.sort();
	let clienteFinal = clientesBalanOr.reverse();
	console.log(clienteFinal);
};	




function ejercicio3(){
	let scotiabankId = accounts.filter(accounts => accounts.bankId == 1);
	let scotiabank = [scotiabankId.find(scotiabankId => scotiabankId.clientId == 1),scotiabankId.find(scotiabankId => scotiabankId.clientId == 2),scotiabankId.find(scotiabankId => scotiabankId.clientId == 4),scotiabankId.find(scotiabankId => scotiabankId.clientId == 5),scotiabankId.find(scotiabankId => scotiabankId.clientId == 7),scotiabankId.find(scotiabankId => scotiabankId.clientId == 8),scotiabankId.find(scotiabankId => scotiabankId.clientId == 9),];
	
	for (clientes in clients){

		for(scoti in scotiabank){

			if (clients[clientes]["id"] == scotiabank[scoti]["clientId"])
				console.log("ScotiaBank "+clients[clientes]["rut"],clients[clientes]["name"]);
		};
	};

	let bciId = accounts.filter(accounts => accounts.bankId == 2);
	let bci = [bciId.find(bciId => bciId.clientId == 2), bciId.find(bciId => bciId.clientId == 3),bciId.find(bciId => bciId.clientId == 5),bciId.find(bciId => bciId.clientId == 6),bciId.find(bciId=> bciId.clientId == 8),bciId.find(bciId => bciId.clientId == 9),];	

	for (clientes in clients){
		for(bc in bci){

			if (clients[clientes]["id"] == bci[bc]["clientId"])
				console.log("BCI "+clients[clientes]["rut"],clients[clientes]["name"]);
		};
	};
	let itauId = accounts.filter(accounts => accounts.bankId == 3);
	let itaud = [itauId.find(itauId => itauId.clientId == 1),itauId.find(itauId => itauId.clientId == 2),itauId.find(itauId=> itauId.clientId == 6),itauId.find(itauId => itauId.clientId == 7),itauId.find(itauId => itauId.clientId == 8),itauId.find(itauId => itauId.clientId == 9),]
	for (clientes in clients){
		for(ita in itaud){

			if (clients[clientes]["id"] == itaud[ita]["clientId"])
				console.log("ITAUD "+clients[clientes]["rut"],clients[clientes]["name"]);
		};
	};

	let condellId= accounts.filter(accounts => accounts.bankId == 4);
	let condell = [condellId.find(condellId => condellId.clientId == 1),condellId.find(condellId => condellId.clientId == 2),condellId.find(condellId => condellId.clientId == 4),condellId.find(condellId => condellId.clientId == 5),condellId.find(condellId => condellId.clientId == 7),condellId.find(condellId => condellId.clientId == 8),];
	for (clientes in clients){
		for(conde in condell){

			if (clients[clientes]["id"] == condell[conde]["clientId"])
				console.log("CONDELL "+clients[clientes]["rut"],clients[clientes]["name"]);
		};
	};

};


function ejercicio4(){
let scotiabankId = accounts.filter(accounts => accounts.bankId == 1);
let balanceTotal1 = 0;
let balanceTotal2 = 0;
let balanceTotal4 = 0;
let balanceTotal5 = 0;
let balanceTotal7 = 0;
let balanceTotal8 = 0;
let balanceTotal9 = 0;
let nombreCliente1 = "";
let nombreCliente2 = "";
let nombreCliente4 = "";
let nombreCliente5 = "";
let nombreCliente7 = "";
let nombreCliente8 = "";
let nombreCliente9 = "";
for (clientes in scotiabankId){
		if (scotiabankId[clientes]["clientId"] == 1) {
			balanceTotal1 = balanceTotal1 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 2) {
			balanceTotal2 = balanceTotal2 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 4) {
			balanceTotal4 = balanceTotal4 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 5) {
			balanceTotal5 = balanceTotal5 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 7) {
			balanceTotal7 = balanceTotal7 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 8) {
			balanceTotal8 = balanceTotal8 + scotiabankId[clientes]["balance"];
		}
		if (scotiabankId[clientes]["clientId"] == 9) {
			balanceTotal9 = balanceTotal9 + scotiabankId[clientes]["balance"];
		}
	};

for(clientes in scotiabankId){
		if (scotiabankId[clientes]["clientId"]==1){
			nombreCliente1=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==2){
			nombreCliente2=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==4){
			nombreCliente4=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==5){
			nombreCliente5=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==7){
			nombreCliente7=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==8){
			nombreCliente8=scotiabankId[clientes]["clientId"];
		}
		if (scotiabankId[clientes]["clientId"]==9){
			nombreCliente9=scotiabankId[clientes]["clientId"];
		}
	};
	clientesBalan1 = [balanceTotal1 ,nombreCliente1,];
	clientesBalan2 = [balanceTotal2 ,nombreCliente2,];
	clientesBalan4 = [balanceTotal4 ,nombreCliente4,];
	clientesBalan5 = [balanceTotal5 ,nombreCliente5,];
	clientesBalan7 = [balanceTotal7 ,nombreCliente7,];
	clientesBalan8 = [balanceTotal8 ,nombreCliente8,];
	clientesBalan9 = [balanceTotal9 ,nombreCliente9,];

const clientesBalan = [clientesBalan1,clientesBalan2,clientesBalan4,clientesBalan5,clientesBalan7,clientesBalan8,clientesBalan9];
	for (bala in clientesBalan) {
		for (balan in clientesBalan) {
			if (clientesBalan[bala][balan] > 25000){
				console.log("balance "+clientesBalan[bala]+" clienteId" );
			}
		}
	};
};


function ejercicio5()
{
	let scotiabankId = accounts.filter(accounts => accounts.bankId == 1);
	let bciId = accounts.filter(accounts => accounts.bankId == 2);
	let itaudId = accounts.filter(accounts => accounts.bankId == 3);
	let condellId= accounts.filter(accounts => accounts.bankId == 4);
	let totalCliScoti = 0;
	let totalCliBci = 0;
	let totalCliIta = 0;
	let totalCliCond = 0;
	
	for (scoti in scotiabankId) {
		totalCliScoti = totalCliScoti + scotiabankId[scoti]["balance"]
	}
	console.log( "El Banco ScotiaBank con el Id:",scotiabankId[1]["bankId"],"el balance total de sus clientes es:",totalCliScoti)

	for (bci in bciId) {
		totalCliBci = totalCliBci + bciId[bci]["balance"]
	}
	console.log( "El Banco BCI con el Id:",bciId[1]["bankId"],"el balance total de sus clientes es:",totalCliBci)
	
	for (ita in itaudId) {
		totalCliIta = totalCliIta + itaudId[ita]["balance"]
	}
	console.log( "El Banco Itaud con el Id:",itaudId[1]["bankId"],"el balance total de sus clientes es:",totalCliIta)

	for (cond in condellId) {
		totalCliCond = totalCliCond + condellId[cond]["balance"]
	}
	console.log( "El Banco Condell con el Id:",condellId[1]["bankId"],"el balance total de sus clientes es:",totalCliCond)
	

}



console.log("Ejercicio 0 ----->",ejercicio0()||"Ejercicio resuelto");
console.log("Ejercicio 1 ----->",ejercicio1()||"Ejercicio resuelto");
console.log("Ejercicio 2 ----->",ejercicio2()||"Ejercicio resuelto");
console.log("Ejercicio 3 ----->",ejercicio3()||"Ejercicio resuelto");
console.log("Ejercicio 4 ----->",ejercicio4()||"Ejercicio resuelto");
console.log("Ejercicio 5 ----->",ejercicio5()||"Ejercicio resuelto");









	

