import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arraKnowledge = signal<IKnowledge[]>([
    {
      src: "/icons/knowledge/html5.svg",
      alt: "Ícone de conhecimento de HTML5"
    },
    {
      src: "/icons/knowledge/css3.svg",
      alt: "Ícone de conhecimento de CSS3"
    },
    {
      src: "/icons/knowledge/javascript.svg",
      alt: "Ícone de conhecimento de JavaScritp"
    },
    {
      src: "/icons/knowledge/angular.svg",
      alt: "Ícone de conhecimento de Angular"
    },
    {
      src: "/icons/knowledge/react.svg",
      alt: "Ícone de conhecimento de React"
    },
    {
      src: "/icons/knowledge/dba.svg",
      alt: "Ícone de conhecimento de SQL"
    }
  ])
}