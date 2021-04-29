import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach', 
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Forest', 
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Desert', 
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Snow', 
      url: 'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'On the Mountains', 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'At the Beach', 
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Forest', 
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Desert', 
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Snow', 
      url: 'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'On the Mountains', 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'At the Beach', 
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Forest', 
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Desert', 
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Snow', 
      url: 'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'On the Mountains', 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'At the Beach', 
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Forest', 
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Desert', 
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Snow', 
      url: 'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'On the Mountains', 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'At the Beach', 
      url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Forest', 
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Desert', 
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'In the Snow', 
      url: 'https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }, 
    {
      title: 'On the Mountains', 
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
