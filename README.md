# darby doomsday
Running at 'www.ErnestHebert.com'; also can go to 'www.ErnieHebert.com', and that will redirect to this site

To run locally, cd to darby_ghost/ and run 'npm start'. Open the local URL in your browser.
	
	If you experience a problem, it might be solved by running "npm install sqlite3 --build-from-source".

This is a companion website by the DALI Lab created for author Ernest Hebert's series of novels, 'The Darby Chronicles'. Here, visitors can play with an interactive map to learn more about the world Ernest has created and peruse the novels, as well as read essays, poems, and blog posts that Ernest plans to add on a regular basis.

This project runs on the Ghost blogging platform, and more info can be found here: 'http://themes.ghost.org/'

The meat of the website's functionality can be found in 'darby_ghost/content/themes/darby/' (index.hbs contains the main file of the website. default.hbs contains elements found on every page of the site, such as the navbar. tag-blog.hbs, tag-essays.hbs, and tag-poetry.hbs contain the code for the blog, essays, and poetry pages respectively. page.hbs contains code for individual blog, essay, or poetry posts.)

From there, CSS and Javascript can be found in 'darby_ghost/content/themes/darby/assets/'

To update the live site:
1) Go to darby_ghost/content/themes/darby/ and zip that file.
2) Go to www.ernesthebert.com/admin and log in using Ernie's credentials.
3) Go to "Labs" and "Export" the blog content in case something goes amiss when we update the theme later. 
4) Go to "General" and click on "Change Theme".
5) Drag in your zipped theme file from step 1 and click "Save All Blog Settings". It might take a while to load.
6) Verify that Ernie's content was not wiped. If it was, go to "Labs" and "Import" the content you exported earlier. 

See darby/WebsiteGuide_final.pdf for instructions on how Ernies should update his content.