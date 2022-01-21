import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-with-drag-drop',
  templateUrl: './with-drag-drop.component.html',
  styleUrls: ['./with-drag-drop.component.scss']
})
export class WithDragDropComponent implements OnInit , OnDestroy {

  // RxJS Subscription is an excellent API for managing many unsubscribe calls.
  // See note below about unsubscribing in ngOnDestroy()
  subs = new Subscription();

  constructor(private dragulaService: DragulaService) {

    // These will get events limited to the DRAGULA_GROUP1 group.
    
    this.subs.add(this.dragulaService.drag("DRAGULA_GROUP1")
      .subscribe(({ name, el, source }) => {
        console.log(`drag from groupName=${name}...`)
      })
    );
    this.subs.add(this.dragulaService.drop("DRAGULA_GROUP1")
      .subscribe(({ name, el, target, source, sibling }) => {
        console.log(`drop in groupName=${name} of el with id=${el.id} `);
        console.log(`drop source_id=${source.id} et target_id=${target.id} `)
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
