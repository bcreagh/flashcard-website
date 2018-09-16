export class Flashcard {
	question: string;
	answer: string;
	
	public constructor(init?:Partial<Flashcard>) {
        Object.assign(this, init);
    }
}