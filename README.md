# Blog Client: Blog Application

This blog application allows users to read others' blog posts, author their own, and leave comments to further the discussion on their favorite posts.

## Important Links

- [API Repo](https://github.com/The-Front-Row/blog-api)
- [Deployed API](https://frontrow-blog.herokuapp.com/)
- [Deployed Client](https://the-front-row.github.io/blog-client/)

## Planning Story

The team (Michael, Henry, Spencer, and Sean) first held a kickoff meeting after receiving the application requirements to establish a plan of attack. The team quickly established roles (as well as a role-rotation schedule), formulated wireframes/views based off said requirements, mapped out Mongoose schemas for the `posts` and `comments` resources, and also established how the client file structure would be organized (heavily leaning on Handlebars to populate different views).

### User Stories

_Authoriztion_

- As a user I want to sign in/up.
- As a user I want to change my password.
- As a user I want to sign out.

_Resource Functionality_

- As a user I want to Create a new blog post.
- As an unauthorized/authorized user I want to read all blog posts.
- As an unauthorized/authorized user I want to read all comments on posts.
- As an authorized user I want to create a post.
- As an authorized user I want to create a comment.
- As an authorized user I want to update posts I own.
- As an authorized user I want to update comments I own.
- As an authorized user I want to delete posts authored by me.
- As an authorized user I want to delete comments authored by me.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- AJAX
- Handlebars

### Unsolved Problems

- We still would like to finish a few things. Hopefully we would like to enable users to view all of their own posts and comments at the click of a button. On top of that, the forms could do with a bit of cleaning and potentially we would enable users to see the usernames of other members. Additionally we would like to branch into mobile accessibilty.

## Images

#### Wireframe:

![wireframe](https://i.imgur.com/YSuX3Xa.png)
