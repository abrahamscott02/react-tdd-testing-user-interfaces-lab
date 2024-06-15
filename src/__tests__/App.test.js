import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers
import App from "../App";

// Test for top-level heading
test("displays a top-level heading with the text 'Hi, I'm Abraham'", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", { level: 1 });
    expect(topLevelHeading).toHaveTextContent(/hi, i'm abraham/i);
});

// Test for image with specific alt text
test("displays an image with alt text 'Abraham running at the track'", () => {
    render(<App />);
    const image = screen.getByAltText("Abraham running at the track");
    expect(image).toBeInTheDocument();
});

// Test for second-level heading
test("displays a second-level heading with the text 'About Me'", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", { level: 2 });
    expect(secondLevelHeading).toHaveTextContent(/about me/i);
});

// Test for biography paragraph
test("displays a paragraph for biography", () => {
    render(<App />);
    const biography = screen.getByText(/i am a student at flatiron christian and one of my hobbies is to spend time outdoors with my brothers/i);
    expect(biography).toBeInTheDocument();
});

// Test for GitHub link
test("displays a link to GitHub", () => {
    render(<App />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/abrahamscott02');
});

// Test for LinkedIn link
test("displays a link to LinkedIn", () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/abrahamscott02');
});
