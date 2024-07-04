1. **Buscar películas del género "Accion":**

   ``` javascript
db.movies.find({genre: 'Accion'})
   ```

2. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
   db.movies.find({
       format: {
           $elemMatch: {
               name: 'Bluray', 
               copies:{$gt: 200}
           }
       }
   })
   ```

3. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   db.movies.find({
       format: {
           $elemMatch: {
               name: 'dvd',
               value: {$lt: 10}
           }
       }
   })
   ```

4. **Buscar películas con un personaje apodado "Cobb":**

   ``` javascript
     db.movies.find({
       character: {
           $elemMatch: {
               apodo: 'Cobb'
           }
       }
     })
   ```

5. **Buscar películas con actores de id 2 y 3:**

   ``` javascript
   db.movies.find({
       'character.id_actor': {
           $in: [2, 3]
       }
   })
   
   db.movies.find({
       character: {
           $elemMatch: {
               id_actor: {
                   $in: [2, 3]
               }
           }
       }
   })
   
   db.movies.find({
       $or:[
           {'character.id_actor':2}, 
           {'character.id_actor':3}
       ]
   })
   
   db.movies.find({
       $or:[
           {
               character: {
                   $elemMatch: {id_actor:2}
   	    	}
           }, 
           {
               character: {
                   $elemMatch:{id_actor:3}
               }
           }
       ]
   })
   
   db.movies.find({
       character: {
           $elemMatch: {
               $or:[
                   {id_actor:2},
                   {id_actor:3}
               ]
           }
       }
   })
   ```

6. **Buscar películas que tengan el formato "Bluray":**

   ``` javascript
    db.movies.find({
        format: {
            $elemMatch: {name: 'Bluray'}
        }
    })
   ```

7. **Buscar películas con el género "Ciencia Ficción":**

   ``` javascript
   db.movies.find({genre: 'Ciencia Ficción'})
   
   db.movies.find({
       genre: {
           $in:['Ciencia Ficción']
       }
   })
   ```

8. **Buscar películas con un rol principal llamado "Miguel":**

   ``` javascript
   db.movies.find({
       character: {
           $elemMatch:{rol:'principal', apodo:'Miguel'}
       }
   })
   ```

9. **Buscar películas que tengan al menos un formato con más de 100 copias:**

   ``` javascript
   db.movies.find({
     "format": {
       $elemMatch: {
         "copies": { $gt: 100 }
       }
     }
   })
   ```

10. **Buscar películas con un actor con id_actor 1:**

   ```javascript
   db.movies.find({
       character: {
           $elemMatch: {id_actor: {$in: [1]}}
       }
   })
   ```

11. **Buscar películas con un personaje principal apodado "Cobb":**

   ``` javascript
   db.movies.find({
       character: {
           $elemMatch:{rol:'principal', apodo:'Cobb'}
       }
   })
   ```
12. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
  Es igual a la segunda query
   ```

13. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   Es igual a la tercera query
   ```

14. **Buscar películas con un personaje secundario apodado "Arthur":**

   ``` javascript
   db.movies.find({
       character: {
           $elemMatch:{rol:'secundario', apodo:'Arthur'}
       }
   })
   ```

15. **Buscar películas con un rol principal y un apodo "Miguel":**

   ``` javascript
   Es igual a la octava query
   ```
