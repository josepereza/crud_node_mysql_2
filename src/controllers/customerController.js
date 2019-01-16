const controllers = {
  list: (req, res, next) => {
    req.getConnection((err, conn) => {
      if(err) return next(err);
      conn.query('SELECT * FROM customer', (err, customers) => {
        if(err) return next(err);
        res.render('customers', {data: customers});
      })
    });
  },

  save: (req, res, next) => {
    const data = req.body;
    req.getConnection((err, conn) => {
      if(err) return next(err);
      conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
        if(err) return next(err);
        res.redirect('/');
      });
    });
  },

  edit: (req, res, next) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      if(err) return next(err);
      conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
        if(err) return next(err);
        res.render('editCustomer', {data: customer[0]});
      });
    });
  },

  delete: (req, res, next) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      if(err) return next(err);
      conn.query('DELETE FROM customer WHERE id = ?', [id], (err, result) => {
        if(err) return next(err);
        res.redirect('/');
      })
    })
  },

  update: (req, res, next) => {
    const { id } = req.params;
    const customer = req.body;
    req.getConnection((err, conn) => {
      if(err) return next(err);
      conn.query('UPDATE customer set ? WHERE id = ?', [customer, id], (err, result) => {
        if(err) return next(err);
        res.redirect('/');
      })
    });
  }
};

module.exports = controllers;