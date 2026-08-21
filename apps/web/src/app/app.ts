import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly activeTab = signal('總覽');

  protected readonly tabs = ['總覽', '營收與獲利', '現金流與財務', '原始資料'];

  protected readonly quarters = [
    { period: '2025 Q3', revenue: '9,899 億', eps: '15.36', margin: '59.5%' },
    { period: '2025 Q4', revenue: '10,437 億', eps: '17.02', margin: '60.2%' },
    { period: '2026 Q1', revenue: '11,009 億', eps: '18.11', margin: '61.0%' },
    { period: '2026 Q2', revenue: '11,736 億', eps: '20.25', margin: '61.8%' },
  ];

  protected selectTab(tab: string): void {
    this.activeTab.set(tab);
  }
}
