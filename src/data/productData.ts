export const PRODUCT = {
  id: 1,
  name: "Ergonomic Cloud Chair Pro",
  price: 499.99,
  originalPrice: 599.99,
  rating: 4.7,
  reviewCount: 1543,
  description: "The ultimate chair for long-lasting comfort and posture support. Designed with premium materials and advanced ergonomics to keep you productive and pain-free during long work sessions.",
  images: [
    'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&w=800',
    'https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&w=800',
    'https://images.unsplash.com/photo-1505797149-43b0069ec26b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&w=800',
    'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXJnb25vbWljJTIwb2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&w=800'
  ],
  colors: [
    { name: 'Space Gray', code: '#4b5563' },
    { name: 'Cloud White', code: '#f3f4f6' },
    { name: 'Ocean Blue', code: '#3b82f6' }
  ],
  stockStatus: 'low', // Crucial for Scarcity
};

export const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    title: "Life-changing comfort!",
    content: "I've been using this chair for 3 months now and it's completely transformed my workday. No more back pain after long hours at the desk."
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    date: "2024-01-10",
    title: "Great quality, minor assembly issues",
    content: "The chair is incredibly comfortable and well-built. Assembly took longer than expected, but the result is worth it."
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 5,
    date: "2024-01-08",
    title: "Perfect for remote work",
    content: "As someone who works from home full-time, this chair has been a game-changer. Highly recommend!"
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    rating: 4,
    date: "2024-01-05",
    title: "Excellent value",
    content: "Better than chairs twice the price. The lumbar support is outstanding."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    rating: 5,
    date: "2024-01-02",
    title: "Worth every penny",
    content: "Invested in this chair and it was the best decision. Comfortable, stylish, and durable."
  }
];

export const RELATED_PRODUCTS = [
  {
    id: 2,
    name: "Standing Desk Converter",
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1605543123001-e33188b556c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmRpbmclMjBkZXNrJTIwY29udmVydGVyfGVufDB8fDB8fHww&w=800',
    rating: 4.5
  },
  {
    id: 3,
    name: "Wireless Ergonomic Mouse",
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJnb25vbWljJTIwbW91c2V8ZW58MHx8MHx8fDA%3D&w=800',
    rating: 4.8
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1571406487954-dc11b0c0767d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVkJTIwZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D&w=800',
    rating: 4.6
  },
  {
    id: 5,
    name: "Ergonomic Mechanical Keyboard",
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJnb25vbWljJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D&w=800',
    rating: 4.7
  },
  {
    id: 6,
    name: "Adjustable Monitor Stand",
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=800',
    rating: 4.4
  },
  {
    id: 7,
    name: "Portable Laptop Stand",
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D&w=800',
    rating: 4.3
  }
];