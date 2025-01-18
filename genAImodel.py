import google.generativeai as genai
import PIL.Image as img


def analyze_cracks(input_imgs):

    API_KEY = "AIzaSyA4rzkfZLpFjn3-AbmjNmfWWHey5wwjFgY"
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel('gemini-pro-vision')

    prompt = \
    """
        This is a crack on the wall of a house.
        Give me  quantitative analysis of the size and 
        severity of the crack in this image, along with
        an analysis of the white rust development around it.
        Also give me a repair cost estimate for this crack
        based on this analysis. Answer in one number:
    """

    input = [prompt]
    input.extend([img.open(input_img) for input_img in input_imgs])
    response = model.generate_content(input)
    return response.text