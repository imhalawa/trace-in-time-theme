function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    console.log("what?")
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column',
      horizontalOrder:true,
    })

    if (grid.classList.contains('dream-grid-about')) {
      // Export Masonry instance to global scope for about page,
      // currently used for resizing the grid after Disqus comments are loaded.
      window.aboutMasonry = msnry
    }

    imagesLoaded(grid, () => msnry.layout())
  })
}

initGrid()
