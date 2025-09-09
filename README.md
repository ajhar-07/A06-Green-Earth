


------ answer the following question------


#### 1) What is the difference between var, let, and const?

      Var  কোনো ফাংশনের ভিতরে ডিক্লেয়ার করলে সেটা পুরো ফাংশনে ব্যবহার করা যাবে। ব্লকের {} ভিতরে করলেও বাইরে থেকে এক্সেস করা যায়।let ব্লকের ভিতরে ডিক্লেয়ার করলে সেটা শুধু ওই ব্লকের ভেতরেই থাকবে, বাইরে থেকে এক্সেস করা যাবে না।const let এর মতো এটাও block scope এ কাজ করে। const একই নামের ২ টি variable হয়না।


#### 2) What is the difference between map(), forEach(), and filter()?
      --- map() পুরনো array পরিবর্তন করে না।প্রতিটি element এর উপর কাজ করে নতুন একটি array return করে।সাধারণত data পরিবর্তন করে নতুনভাবে সংরক্ষণ করার জন্য ব্যবহার হয়।

      ---- forEach() শুধু array-এর প্রতিটি element এর উপর loop চালায়।কোনো নতুন array return করে না।

      ---- filter() প্রতিটি element কে একটি শর্তে  চেক করে।যেগুলো শর্ত পূরণ করে সেগুলো নিয়ে একটি নতুন array return করে।

#### 3) What are arrow functions in ES6?
     js এ function () shortcut করে ব্যাবহার করার জন্য arrow functions বা =>{} ব্যাবহার করা হয়।ছোট কোড অনেক ছোট আর clean হয়।এক লাইনের কোড হলে return লিখতে হয় না।

#### 4) How does destructuring assignment work in ES6?
     Destructuring assignment হলো JavaScript ES6 এর একটি ফিচার, যেটার মাধ্যমে array বা object থেকে ডাটা আলাদা ভেরিয়েবলে সহজে বের করা যায়।টা কোডকে ছোট, পরিষ্কার আর পড়তে সহজ করে।
     

#### 5) Explain template literals in ES6. How are they different from string concatenation?
     
     `` template literals এর সাহায্য বহু লাইনের কুড একটি টেমপ্লেটের ভিতরে লেখা জায়।
     সহজে string-এর মধ্যে ভেরিয়েবল বা expression বসানো যায় । tring concatenation এ
     + দিয়ে জোড়া লাগাতে হয়।কিন্তু emplate literals ${} ব্যবহার করে ভেরিয়েবল/এক্সপ্রেশন বসানো যায়। string concatenation এ ব্রেক এর জন্য \n ব্যবহার করতে হয়
     ব্যাবহার করা হয়।template literals এ সরাসরি বহু লাইন লেখা যায়
