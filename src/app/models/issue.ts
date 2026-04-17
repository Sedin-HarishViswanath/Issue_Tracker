export interface Issue {
    id: number;
    title: string;
    priority: 'Low' | 'Medium' | 'High';
    isResolved: boolean;
}