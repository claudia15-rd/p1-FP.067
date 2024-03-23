import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nameFilter',
    standalone:true
    
    })

export class NameFilterPipe implements PipeTransform {
    transform(items: any[], searchText:string,opcion:string ): any[] {
        console.log(searchText);
        console.log(opcion);

        if (!items) return[];
        if (!searchText) return items;

        searchText=searchText.toLowerCase();
        opcion=opcion.toLowerCase()
        
        if (opcion=="posición") {

            return items.filter((item: any) => {
                return item.posicion.toLowerCase().includes(searchText);
            })
            
        } else if (opcion=="edad")
        {
            
            return items.filter((item: any) => {
                console.log(item.edad);
                return item.edad==searchText;
            })
        } 
        else 
        {
            return items.filter((item: any) => {
                return item.nombre.toLowerCase().includes(searchText);
            })
        }
    }        
}
