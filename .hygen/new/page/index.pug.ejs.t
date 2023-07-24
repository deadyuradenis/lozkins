---
to: <%= absPath %>/index.pug
---
extends /core/templates/default.pug

include /core/lib/layout/index.pug
//- include /widgets/header/index.pug
//- include /widgets/footer/index.pug

block title 
    title <%=name%>

block beforeWorkarea
    //- +header()

block workarea
  

block afterWorkarea
    //- +footer()

