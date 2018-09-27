echo "Deploy master"

git remote add heroku git@heroku.com:samsung-next-site.git
git show --summary
git push -f heroku master
