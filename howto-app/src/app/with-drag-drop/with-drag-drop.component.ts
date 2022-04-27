import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

class Item{
    public name: string;
    public imageName: string;

    constructor(name:string,imageName:string|undefined=undefined){
                  this.name = name;
                  if(imageName==undefined)
                     this.imageName=name+".jpg";
                  else
                     this.imageName=imageName;
                }
}

@Component({
  selector: 'app-with-drag-drop',
  templateUrl: './with-drag-drop.component.html',
  styleUrls: ['./with-drag-drop.component.scss']
})
export class WithDragDropComponent implements OnInit , OnDestroy {

  availableItems : Item[] = [ new Item("chat") , new Item("tigre") , new Item("colibri") , new Item("cygne") ,  new Item("rose") , new Item("tournesol")];
  selectedItems : Item[] = [];

  dragEventDetailMessage : string="";
  dropEventDetailMessage : string="";

  selectItem(itemName:string){
      for(let [index,item] of this.availableItems.entries()){
        if(item.name == itemName){
          this.selectedItems.push(item);
          this.availableItems.splice(index,1);
        }
      }
  }

  unselectItem(itemName:string){
    for(let [index,item] of this.selectedItems.entries()){
      if(item.name == itemName){
        this.availableItems.push(item);
        this.selectedItems.splice(index,1);
      }
    }
  }

  // RxJS Subscription is an excellent API for managing many unsubscribe calls.
  // See note below about unsubscribing in ngOnDestroy()
  subs = new Subscription();

  constructor(private dragulaService: DragulaService) {

    // These will get events limited to the DRAGULA_GROUP1 group.
    
    this.subs.add(this.dragulaService.drag("DRAGULA_GROUP1")
      .subscribe(({ name, el, source }) => {
        console.log(`drop in groupName=${name}`);
        this.dragEventDetailMessage=`drag of element with id=${el.id} from
        source container of id=${source.id} `
      })
    );
    this.subs.add(this.dragulaService.drop("DRAGULA_GROUP1")
      .subscribe(({ name, el, target, source, sibling }) => {
        console.log(`drop in groupName=${name} of el with id=${el.id} `);
        this.dropEventDetailMessage=`<b>drop</b> of <u>element with id=<i>${el.id}</i></u> <b>from</b>
        <u>source container of id=<i>${source.id}</i></u> <b>to</b> <u>target container of id=<i>${target.id}</i></u> `;
      })
    );

    this.subs.add(this.dragulaService.drop("DRAGULA_GROUP2")
      .subscribe(({ name, el, target, source, sibling }) => {
        console.log(`drop in groupName=${name} of el with id=${el.id} `);
        console.log(`drop source_id=${source.id} et target_id=${target.id} `)
        let itemName = el.id; //ici selon le contexte
        if(source.id=="container-available" ||target.id=="container-selected"){
          this.selectItem(itemName);
        }
        if(source.id=="container-selected" ||target.id=="container-available"){
          this.unselectItem(itemName);
        }
      })
    );

    /*
    // some events have lots of properties, just pick the ones you need
    this.subs.add(this.dragulaService.dropModel("DRAGULA_GROUP1")
      // WHOA
      // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
      .subscribe(({ sourceModel, targetModel, item }) => {
        // ...
      })
    );

    // You can also get all events, not limited to a particular group
    this.subs.add(this.dragulaService.drop()
      .subscribe(({ name, el, target, source, sibling }) => {
        // ...
      })
    );
    */
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
  }

}
