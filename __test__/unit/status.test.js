const app = require('../../server');
const request= require('supertest');


    describe('All of the test in this category must be returning 200 status', () => {

        it('Home route must return a 200 status', async () => {
            let Homereturn = await request(app).get('/');
            expect(Homereturn.status).toBe(200);
            
            
        });

        it('Products api route must Run with 200 status', async () => {
            let ProductsApi = await request(app).get('/api/products');
            expect(ProductsApi.status).toBe(200);
            
        });

        it('Orders Category Api must run with 200 status', async () => {

            let cartApi = await request(app).get('/api/cart');
            expect(cartApi.status).toBe(200);
            
        });
        
    });