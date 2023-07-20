const url:string = 'Abbigliamento.json'




class Item {
    constructor (
 public id:number,
 public codprod:number,
 public collezione:string,
 public capo:string,
 public modello:number,
 public quantita:number,
 public colore:string,
 public prezzoivaesclusa:number,
 public prezzoivainclusa:number,
 public disponibile:string,
 public saldo:number,
    ) 
    {}
    getsaldocapo():number {
        return this.prezzoivainclusa * this.saldo/100
    }
    getacquistocapo():number {
        return this.prezzoivainclusa - this.getsaldocapo()
    }
}

let clothes:Item[] = []
fetch (url)
.then((res:any) => {
    if(res.ok) {
        console.log(res);
        return res.json();
    } else{
        throw new Error("Error");
        }
}) .then((data:any) => {
    data.forEach((el:any, i:number) => {
        let oneItem = new Item(el.id,el.codprod, el.collezione,el.capo,el.modello,el.quantita,el.colore,el.prezzoivaesclusa,el.prezzoivainclusa,el.disponibile,el.saldo)
        clothes.push(oneItem)
        console.log( 'Il prezzo è', clothes[i].getacquistocapo(), '€ per', clothes[i].capo);
        
        
    })});

    console.log(clothes);
