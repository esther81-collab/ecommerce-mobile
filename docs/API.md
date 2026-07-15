# API Documentation

## Base URL
`http://localhost:5000/api`

## Endpoints

### Auth
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

### Cart
- `GET /cart` - Get cart items
- `POST /cart` - Add to cart
- `DELETE /cart/:itemId` - Remove item

### Orders
- `POST /orders` - Create order
- `GET /orders` - Get user orders

### Users
- `GET /users/profile` - Get profile
- `PUT /users/profile` - Update profile