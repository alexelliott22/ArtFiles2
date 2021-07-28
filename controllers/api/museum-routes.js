const router = require('express').Router();
const {Artwork, Museum, Artist} = require('../../models');

//get all users
router.get('/', (req, res) => {
    Museum.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log('failed to get all users')
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    Museum.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Artwork,
                attributes: [        
                'id',
                'title',
                'medium',
                'created_at',
                'date',
                'style',
                'location',
                'image_url'],
                include: [
                    {
                        model: Artist,
                        attributes: 'artist_name'
                    }
                ]
            }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with this ID'})
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log('Failed to get user')
        res.status(500).json(err)
    })
})

//create a new user
router.post('/', (req, res) => {
    Museum.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.museum_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log('Failed to add user');
        res.status(500).json(err);
    })
});

//user logs in
router.post('/login', (req, res) => {
    Museum.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user id with that username'})
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password)

        if(!validPassword) {
            res.status(400).json({message: 'Incorrect password'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })
    })
    .catch(err => {
        console.log('Failed to login');
        res.status(500).json(err);
    });
});

//user logsout
router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        }
        else {
          res.status(404).end();
        }
        
    } catch (error) {
        console.log(error)
    }
});

//update user
router.put('/:id', (req, res) => {
    // pass in req.body instead to only update what's passed through
    Museum.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
    }
    res.json(dbUserData);
    })
    .catch(err => {
    console.log('Failed to update user');
    res.status(500).json(err);
    });
});

//delete user
router.delete('/:id', (req, res) => {
    Museum.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
    }
    res.json(dbUserData);
    })
    .catch(err => {
    console.log('Failed to delete user');
    res.status(500).json(err);
    });
});
  
module.exports = router;