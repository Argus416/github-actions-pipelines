interface Book {
	id: number;
	title: string;
	author: string;
}

interface User {
	id: number;
	name: string;
	books: number[];
}

class LibraryService {
	private users: any[] = [];
	private books: any[] = [];

	constructor() {
		this.users = [];
		this.books = [];
	}

	addUser(user: User) {
		this.users = [...this.users, user];
	}

	addBook(book: Book) {
		this.books = [...this.books, book];
	}

	getUsers() {
		return this.users;
	}

	getBooks() {
		return this.books;
	}

	searchBooks(search: string, orderBy: "id" | "title" | "author" = "id") {
		const filteredBooks = this.books.filter((book) => {
			return book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
		});
		console.log(
			filteredBooks.sort((a, b) => {
				return a[orderBy] - b[orderBy];
			}), "filteredBooks"
		)
		return filteredBooks.sort((a, b) => {
			return a[orderBy] - b[orderBy];
		});
	}

	getUserBooks(userId: number) {
		return this.users.find((user) => user.id === userId)?.books;
	}

	getUser(userId: number) {
		return this.users.find((user) => user.id === userId);
	}

	getBook(bookId: number) {
		return this.books.find((book) => book.id === bookId);
	}

	rentBook(userId: number, bookId: number) {
		const user = this.getUser(userId);
		const book = this.getBook(bookId);

		if (!user || !book) return;

		user.books = [...user.books, bookId];
	}

	returnBook(userId: number, bookId: number) {
		const user = this.getUser(userId);
		const book = this.getBook(bookId);

		if (!user || !book) return;

		user.books = user.books.filter((b: number) => b !== bookId);
	}

	clear() {
		this.users = [];
		this.books = [];
	}
}

export default new LibraryService();
