import LibraryService from "../service/Library";

function randomNumber() {
	return Math.floor(Math.random() * 10000000);
}

describe("Library", () => {
	const userId = randomNumber();
	const bookId = randomNumber();

	it("Add user", () => {
		LibraryService.addUser({
			id: userId,
			name: "John Doe",
			books: [],
		});
		expect(LibraryService.getUsers()).toEqual([
			{
				id: userId,
				name: "John Doe",
				books: [],
			},
		]);
	});

	it("Add book", () => {
		LibraryService.addBook({
			id: bookId,
			title: "The Lord of the Rings",
			author: "J.R.R. Tolkien",
		});
		expect(LibraryService.getBooks()).toEqual([
			{
				id: bookId,
				title: "The Lord of the Rings",
				author: "J.R.R. Tolkien",
			},
		]);
	});

	it("Rent book", () => {
		LibraryService.rentBook(userId, bookId);

		const user = LibraryService.getUser(userId);
		expect(user.books).toEqual([bookId]);
	});

	it("Return book", () => {
		LibraryService.returnBook(userId, bookId);

		const user = LibraryService.getUser(userId);
		expect(user.books).toEqual([]);
	});

	it("Rent unavailable book", () => {
		LibraryService.rentBook(userId, randomNumber());

		const user = LibraryService.getUser(userId);
		expect(user.books).toEqual([]);
	});

	it("Return unavailable book", () => {
		LibraryService.returnBook(userId, randomNumber());

		const user = LibraryService.getUser(userId);
		expect(user.books).toEqual([]);
	});

	it("Return sorted and searched books", () => {
		LibraryService.addBook({
			id: 2,
			title: "Metro 2033",
			author: "Dmitry Glukhovsky",
		});

		LibraryService.addBook({
			id: 3,
			title: "Metro 2034",
			author: "Dmitry Glukhovsky",
		});


		expect(LibraryService.searchBooks("Metro", "id")).toEqual([
			{
				id: 2,
				title: "Metro 2033",
				author: "Dmitry Glukhovsky",
			},
			{
				id: 3,
				title: "Metro 2034",
				author: "Dmitry Glukhovsky",
			},
		]);
	});
});
