import { Component, signal, computed } from '@angular/core';
import { Issue } from './models/issue';
import { HeaderComponent } from './header/header.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TicketCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  issues = signal<Issue[]>([
    { id: 1, title: 'Fix bug', priority: 'High', isResolved: false },
    { id: 2, title: 'Add feature', priority: 'Medium', isResolved: false },
    { id: 3, title: 'Update docs', priority: 'Low', isResolved: true },
  ]);

  unresolvedCount = computed(() => this.issues().filter(i => !i.isResolved).length);

  updateIssue(id: number) {
    this.issues.update(issues => issues.map(i => i.id === id ? { ...i, isResolved: true } : i));
  }
}