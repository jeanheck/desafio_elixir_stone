
# Desafio: Programa de Formação em Elixir

Solution of the [challenge proposed](https://gist.github.com/programa-elixir/1bd50a6d97909f2daa5809c7bb5b9a8a) by [Stone](https://www.stone.com.br/) for the Elixir Training Program

Note: This test wasn't submitted to Stone. I just did it for fun, and to practice somethings : )

## Getting Started

Instructions for preparing and using the developed app.

### Prerequisites

What you need install to make it work:

* NodeJS (I used the version 14.15.3, but the code is simple. Older/Newer versions can be work well)

At your terminal:

```
 git clone https://github.com/jeanheck/desafio_elixir_stone
 cd desafio_elixir_stone
 npm install
```

### To run the project

```
 node index.js
```

### To run tests

Tests in this project are using [Jest](https://jestjs.io/). To run, you just need to exec:

```
 npm test
```

### About the code

I choose to use [Faker](https://github.com/marak/Faker.js/) to generate the lists of products and emails. Because that, you don't need to create the lists manually (but, if you want, you can).

If you want to create products/emails list manually, you must follow this pattern:

For products:

```
 [
   {
     name: value,
     amount: value,
     price: value
   },
   {
     name: value,
     amount: value,
     price: value
   },
   ...
 ]
```

For emails:

```
 [
   {
     text: value
   },
   {
     text: value
   },
   ...
 ]
```

The code is based on Brazilian Money. Because that, the ```price``` field must be a integer value, and converted in Cents, not in Real. For example, if the product price was R$ 10, you want to type 1000 in the price (because 100 cents are equivalent to 10 reais).

The number of products and emails that will be used when you run ```node index.js``` are equal to the values in ```utils/constants.js```. The constants set some values used in some functions in this code. You can change this values to create greater or lower lists, but please don't overdo it.

The output of this project is all in terminal. When you run ```node index.js```, the layout of the result that you will see will be similar to that:



And if you run ```npm test```, the output will be similar to that:



That's all folks.

## Autor

* **Jean Carlos Heck** - [GitHub](https://github.com/jeanheck)
