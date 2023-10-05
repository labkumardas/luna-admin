exports.index = async (req, res) => {
  if (req.session.user) {
    res.render('dashboard/index');
  } else {
    return res.redirect('/');
  }
};
