import { Component, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida fullStack',
      width: '100px',
      height: '51px',
      description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicao exclusivamente ao ecossistema Angular!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])
}