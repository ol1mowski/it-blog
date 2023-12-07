import { render, screen } from "@testing-library/react"
import Slider from "../Slider";

describe('Change Text Component',  () => {

    test('loading data check', async () => {
        render(<Slider />);
    
        const postData = await screen.findAllByRole('h1');
        expect(postData).toHaveLength(0);
    });
    

    test('loading image check', async () => {
        render(<Slider />);

        const postImage = await screen.findAllByRole('img');
        expect(postImage).toHaveLength(0);
    });
});