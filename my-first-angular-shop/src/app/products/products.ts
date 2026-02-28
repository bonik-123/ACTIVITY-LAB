import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {
  products = [
    { name: 'Toyota Supra MK4', price: 3200000, available: true, category: 'Sports', image: 'images/TOYOTA.png'},
    { name: 'Nissan GT-R R35', price: 7800000, available: true, category: 'Sports', image: 'images/NISSAN.avif' },
    { name: 'Ford Mustang GT', price: 3500000, available: false, category: 'Muscle', image: 'images/FORD.avif' },
    { name: 'Honda Civic Type R', price: 3800000, available: true, category: 'Hatchback', image: 'images/HONDA.avif' },
    { name: 'Chevrolet Camaro SS', price: 3600000, available: false, category: 'Muscle', image: 'images/CHEVY.avif' },
  ];

  selectedCategory = 'All';

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    if (product.available) {
      alert(product.name + ' Contacted for a quote!');
    } else {
      alert(product.name + ' is out of stock!');
    }
  }
}

