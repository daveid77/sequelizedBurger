# Sequelized Burger

Week Eight Homework Part 2: [Node Express Handlebars](http://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/09-11-2017-UCB-Class-Repository-FSF-FT/blob/master/08-week/homework/part-2/homework_instructions.md).

## Installation

1. Clone repo and install NPM packages:

    ```
    git clone https://github.com/dbmarshall/sequelizedBurger.git
    cd sequelizedBurger/
    npm install 
    ```

2. Update `config/config.json` with **your** development (local) environment username and password

3. Create `sequelizedburger_db` database in MySQL: 

    ```
    mysql -u root -p
    source schema.sql;
    exit;
    ```

4. Start server to create tables from sequelized models:

    ```
    node server.js
    ```

6. Populate tables with data in MySQL: 

    ```
    cd db/
    mysql -u root -p
    source seeds.sql;
    exit;
    ```

## Available Node Commands and URLs

**Local:** 

* Run `node server.js` 
* Then load [http://localhost:8080/](http://localhost:8080/)

**Heroku Deployment:** 

* Load [https://sequelized-burger-davidm.herokuapp.com/](https://sequelized-burger-davidm.herokuapp.com/)

## Misc Notes

* Github repo pushes autodeploy to Heroku (sweet).

## Author

* **David Morse** ([dbmarshall.github.io](https://dbmarshall.github.io))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

