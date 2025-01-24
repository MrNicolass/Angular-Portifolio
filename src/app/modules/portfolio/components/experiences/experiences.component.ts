import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Junior Database Analyst",
        p: "GEOvendas | Jun 2024 - Jan 2025"
      },
      text: "<p>In my current position at GEOvendas, I specialize in managing client databases, where I focus on manipulating tables and creating views and triggers to ensure smooth data integration within our platforms.</p>",
    },
    {
      summary: {
        strong: "Customer Service-Analyst",
        p: "GEOvendas | Aug 2023 - Jun 2024"
      },
      text: "<p>I provide support for two of the four products offered by the company, specifically Analytics and Sales Force. My work involves thorough analysis of client inquiries or errors that arise during usage, always aiming for prompt and effective resolution. I primarily handle data manipulation (queries, modifications, and query construction) across various databases, including PostgreSQL, Oracle, Microsoft SQL Server, and Firebird.</p>",
    },
    {
      summary: {
        strong: "Data Migration Analytst",
        p: "Clinicorp | Dec 2022 - Aug 2023"
      },
      text: "<p>I was responsible for migrating data for clients transitioning from dental management systems or simple spreadsheets, effectively configuring their databases for the Clinicorp system. My work involved utilizing tools such as Excel, MySQL, and Firebird to ensure accurate and efficient data transfer.</p>",
    },
    {
      summary: {
        strong: "IT Support Technician - WEG",
        p: "Algar Tech | May 2022 - Dec 2022"
      },
      text: "<p>I worked as a contractor providing technical support and assistance to WEG employees, managing all basic IT equipment within my designated region at WEG I. Additionally, I participated in the machine upgrade project, ensuring a smooth transition and improved functionality.</p>",
    },
    {
      summary: {
        strong: "Infrastructure Assistant",
        p: "Aug 2021 - May 2022"
      },
      text: "<p>Era o responsável por toda parte básica de infraestrutura do hospital, desde configuração de redes locais da empresa, manutenção e instalação de computadores e impressoras e também gerenciamento de usuários da rede interna.</p>",
    },
  ]);
}