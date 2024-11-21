
# **Discount PRO**

## **Project Overview**  
**Discount PRO** is a user-friendly coupon collecting application designed to help users discover and utilize discount coupons for popular e-commerce shops in Bangladesh. The platform consolidates all available coupons from various stores, allowing users to save money and shop smarter.  

---

## **Purpose**  
The main goal of this project is to provide users with a seamless way to explore, collect, and use discount coupons from their favorite brands. It simplifies the process of finding active promotions, ensuring users never miss out on great deals.  

---

## **Key Features**  
1. **User Authentication**  
   - Login and registration using email/password or Google Authentication.  
   - Password validation and error feedback.  

2. **Home Page**  
   - A static banner slider with winter-themed visuals.  
   - Dynamic brand sections including "Top Brands" and "Brands on Sale."  

3. **Brands Page**  
   - Searchable list of all brands.  
   - Detailed brand cards with rating, descriptions, and active sales indicators.  

4. **Coupon Page**  
   - Displays all coupons for a selected brand.  
   - Features "Copy Code" functionality using `react-copy-to-clipboard` and "Use Now" buttons.  

5. **My Profile Page**  
   - Displays user photo, name, and email in a card format.  
   - Editable profile details via an update feature.  

6. **Error Handling**  
   - Custom 404 page with a redirect to the home page.  

7. **Responsive Design**  
   - Optimized for mobile, tablet, and desktop devices.  

8. **Animations**  
   - Added dynamic visual effects using `animate.css`.  

---

## **NPM Packages Used**  
Below are the key npm packages used in this project:  

1. **React Fast Marquee**

2. **React Copy to Clipboard**

3. **AOS** 

4. **React Toastify**

5. **React Rating Stars** 

6. **React SwiperJS**

---

## **How to Run Locally**  
1. Clone this repository:  
   ```bash
   git clone https://github.com/your-username/discount-pro.git
   cd discount-pro
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Add Firebase configuration to `.env.local` file:  
   ```plaintext
   VITE_apiKey=your-api-key
   VITE_authDomain=your-auth-domain
   VITE_projectId=your-project-id
   VITE_storageBucket=your-storage-bucket
   VITE_messagingSenderId=you-sender-id
   VITE_appId=1:you-app-id
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser.  

.

**Live URL**: [Discount PRO](https://discountpro.netlify.app/)