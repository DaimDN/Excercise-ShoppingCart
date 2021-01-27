const app = require('../../server');
const request= require('supertest');

var object = 
   [
        {
            "sku": "AWDT0001-S",
            "name": "Cotten T-Shirt",
            "size": "small",
            "price": 10.99,
            "stockLevel": 10,
            "url": "images/cotton.jpg"
        },
        {
            "sku": "AWDT0001-M",
            "name": "Cotten T-Shirt",
            "size": "medium",
            "price": 10.99,
            "stockLevel": 50,
            "url": "images/cotton.jpg"
        },
        {
            "sku": "AWDT0001-L",
            "name": "Cotten T-Shirt",
            "size": "large",
            "price": 10.99,
            "stockLevel": 0,
            "url": "images/cotton.jpg"
        },
        {
            "sku": "AWDT0002",
            "name": "Baseball cap",
            "price": 5.99,
            "stockLevel": 7,
            "url": "images/baseball.jpg"
        },
        {
            "sku": "AWDT0003-M",
            "name": "Shorts",
            "price": 14.99,
            "stockLevel": 100,
            "size": "medium",
            "url": "images/short.jpg"
        }
    ]



        describe('Testing the Api Units along with respective Dataste', () => {

            it('should return a posssible Object Listed ', async () => {
                let ProductsApi = await request(app).get('/api/products');
                expect(ProductsApi.text).toBe(JSON.stringify(object));
                expect(JSON.stringify(ProductsApi.body)).toBe(JSON.stringify(object));
            });


            it('should returna Possible Object of Array', async () => {
                let CartApi = await request(app).get('/api/cart');
                expect(CartApi.text).toBe(JSON.stringify([]));
                
            });
            
        });