# Vue Annotation Manager

This project processes and manages text annotations using a set of predefined rules. Each annotation has a start and end character index, along with metadata. The system allows users to edit, filter, and apply custom rules to annotations and text, ensuring that character indices are properly aligned with the content. The tool provides real-time visualization for original, processed, and modified annotations using the [vue-component-annotated-text](https://www.npmjs.com/package/@ghentcdh/vue-component-annotated-text) package.


## Using the Annotation Manager

1. **Text and Annotation Display**:
   - Input the `Text ID` and press **Enter** to fetch the corresponding text and annotations.
   - View original and processed annotations in a side-by-side layout.
   - Annotations are filtered and can be toggled based on their type (e.g., typography, orthography, language).
   
2. **Editing Annotations**:
   - You can interact with the `Processed Text` section to edit annotations.
   - Any modifications to annotations are temporarily stored until confirmed or canceled.
   
3. **Rules Application**:
   - Rules such as tokenization or text-based alignment can be applied to adjust character indices.
   - Toggle specific rules on or off using the interface to see how they impact annotations.
   - The system attempts to align annotations based on context and nearby tokens if an exact match isn't found.

4. **Confirm or Cancel Changes**:
   - Users can confirm all or selected annotations using the provided action buttons.
   - Modified annotations are clearly marked and displayed separately for review.

## Features

- **Text Filtering**: Apply filters to annotations by type.
- **Editable Annotations**: Annotations can be edited and modified in real time.
- **Rule-Based Fixing**: Character index fixes based on tokenization, text matches, and other rule sets.
- **Visualization**: Displays original, processed, and modified annotations side by side for comparison.

## Dependencies
The following packages are used for development:

- @ghentcdh/vue-component-annotated-text: A component for rendering annotated text.

- [Vue.js](https://vuejs.org/) and [Vite](https://vitejs.dev/) for frontend development.
- [vue-component-annotated-text](https://www.npmjs.com/package/@ghentcdh/vue-component-annotated-text) for rendering and visualizing annotated text.
- [Tokenizr](https://www.npmjs.com/package/tokenizr) to split text into tokens.
- [diff](https://www.npmjs.com/package/diff) to align original and modified texts.
- **Elasticsearch** via the [EvWrit elasticsearch](https://www.evwrit.ugent.be/) instance for fetching text and annotations.

## Setup and Installation

### Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/GhentCDH/evwrit_annotation_flow.git
   cd Vue-Annotation-Manager
2. Install dependecncies:
   ```sh
   pnpm install
3. Run the development server:
   ```sh
   pnpm run dev
