import { makeFakeComments } from '../../../utils/mocks';
import { render, screen } from '@testing-library/react';
import { MoviePageReviews } from './movie-page-reviews';


describe('MoviePageReviews', () => {
  it('renders correctly', () => {
    const mockFakeComment = makeFakeComments();
    render(<MoviePageReviews comments={[mockFakeComment]} />);
  
    expect(screen.getAllByTestId('review-list')).toHaveLength(1);
    expect(screen.getByText(mockFakeComment.comment)).toBeInTheDocument();
    expect(screen.getByText(mockFakeComment.user)).toBeInTheDocument();
    expect(screen.getByText(mockFakeComment.rating)).toBeInTheDocument();
  });
});
