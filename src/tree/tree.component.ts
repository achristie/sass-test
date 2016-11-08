import { Component, ViewEncapsulation } from '@angular/core';
import { TreeModule } from 'angular2-tree-component';

@Component({
  selector: 'test-tree',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <Tree [nodes]="nodes"></Tree>
  `
})
export class TestTreeComponent {
   nodes = [
    {
      id: 1,
      name: 'Financials',
      children: [
        { id: 2, name: 'Cash Flow Statement' },
        { id: 3, name: 'Balance Sheet' }
      ]
    },
    {
      id: 4,
      name: 'Private',
      children: [
        { id: 5, name: 'Shareholder Info' },
        {
          id: 6,
          name: 'Top Secret',
          children: [
            { id: 7, name: 'Who to Dilute Next' }
          ]
        }
      ]
    }
  ];
}
