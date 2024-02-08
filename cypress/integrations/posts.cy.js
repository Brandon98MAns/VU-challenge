describe('API Testing - /posts', () => {
    it('GET - Should retrieve posts', () => {
      cy.request('/posts').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.above(0);
      });
    });
  
    it('POST - Should create a new post', () => {
      const postData = { title: 'New Post', body: 'This is a new post.' };
      cy.request('POST', '/posts', postData).should((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq(postData.title);
      });
    });
  
    it('PUT - Should update an existing post', () => {
      const updatedData = { title: 'Updated Post Title', body: 'This is an updated post.' };
      cy.request('/posts').then((response) => {
        const postId = response.body[0].id; // Assuming there's at least one post
        cy.request('PUT', `/posts/${postId}`, updatedData).should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.title).to.eq(updatedData.title);
        });
      });
    });
  
    it('PATCH - Should partially update an existing post', () => {
      const patchData = { title: 'Patched Post Title' };
      cy.request('/posts').then((response) => {
        const postId = response.body[0].id; // Assuming there's at least one post
        cy.request('PATCH', `/posts/${postId}`, patchData).should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.title).to.eq(patchData.title);
        });
      });
    });
  
    it('DELETE - Should delete an existing post', () => {
      cy.request('/posts').then((response) => {
        const postId = response.body[0].id; // Assuming there's at least one post
        cy.request('DELETE', `/posts/${postId}`).should((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
  