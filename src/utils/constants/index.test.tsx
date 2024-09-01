import products from './products';

describe('Products Array', () => {
  test('should be defined and not empty', () => {
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
  });

  test('should contain products with valid properties', () => {
    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('quality');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('imageUrl');
    });
  });

  test('should have price and quality within valid ranges', () => {
    products.forEach(product => {
      expect(product.price).toBeGreaterThanOrEqual(0);
      expect(product.quality).toBeGreaterThanOrEqual(1);
      expect(product.quality).toBeLessThanOrEqual(5);
    });
  });

  test('should have a valid imageUrl', () => {
    const urlPattern = /^https?:\/\/.+/;
    products.forEach(product => {
      expect(product.imageUrl).toMatch(urlPattern);
    });
  });
});
