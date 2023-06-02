/* 
* 1. install stripe and react stripe js 
* 2. create a checkout form with card elements : card elements contains: card number, expired date, cvs, zip code
* 3. create account in the stripe and get publishable key 
* 4.get card information 
* 5. create a payment method 
* 6. use test card to test payment
*7. on the server side install stripe
*8. create a payment intent api with payment method:["card"]
*9. make sure you provide amount in cents = 'price * 100;
* 10. called payment intent api to get client secret and store it in a state
* 11. use confirmCardPayment api with client secret card info
* 12 . display confirmCard error || success
*13. do things after payment

 */