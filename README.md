## Notes on Challenge

Prior to starting I had a look at the API documentation and created an account as I wasn't sure how time consuming that would be, was relatively easy.

Starting challenge:

- Used nextJS 13.2.2 - was comfortable using page routing system given time restraints
- Used React Query / axios - was a quick way to show base handling of loading / error states. I did not spend time making them look pretty or making components out of them
- Used Tailwind - definitely my preferred choice

Choices I made:

- Home trending page I restricted to 20 results. Had a feeling I would not have time for pagination etc
- I used the fixed_height object within the call based on the quick start guide - [Giphy API Quick Start Guide](https://developers.giphy.com/docs/api#quick-start-guide). I was going to come back to this and view others if I had time but did not so stuck with it
- I originally rendered them in a grid with a title. They didn't really look right so looked at Giphy's home page and copied their layout. Got rid of grid / titles and just used columns
- I ended up going for a Layout component for the search to ensure state was saved between them, though this would definitely depend on the application and whether it needed to be global or not. If not, we could definitely use the search input as a reusable component where needed
- I used search params in the URL as my state as I believe that would be better for SEO as well as UX if they wanted to bookmark a search. It allows search engines to crawl and index URLs and could serve as a great analytics tool to see what people search
- I kept the API exposed as it needed to be client side. According to a quick search this was ok until production - [GitHub issue comment](https://github.com/Giphy/giphy-js/issues/120#issuecomment-680988917)
