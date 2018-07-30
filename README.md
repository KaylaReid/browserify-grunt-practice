## Practice: Contact List
Build four components:

A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
A Contact component that displays a person's name, phone number, and address.
A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
In main.js, import the ContactList component and the ContactForm component.

The user should see the contact form at the top of the view, and the list of contacts underneath it.

Bonus: Are there any other modules that could be made? Do any modules have more than one possible responsibility? Perhaps something that is a general utility function.

## Practice: Product Ordering
Your task is to simulate a product listing page like you would find on Etsy, Amazon, or Ebay. This application should implement the following features.

Display an individual product component. Each product should have a title, short description, price, quantity, and an image.
Display the application information in a navigation bar at the top of the page.
The name of the company - Betsy
Three links: Categories, Orders, and Log Out (_these links won't actually do anything, you're just practicing making the navigation bar a component)
Display a review list component that contains a maximum of 3 product review components beneath a product. You can use hipster ipsum for the reviews themselves.