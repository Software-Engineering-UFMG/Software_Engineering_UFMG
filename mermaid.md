```mermaid
flowchart TD
    A[Start] --> B[Login Page]
    B --> C{User Logged In?}
    C -->|Yes| D[Home Page]
    C -->|No| E[Sign Up Page]
    E --> B
    D --> F[Dashboard]
    F --> G[Profile]
    F --> H[Settings]
    G --> I[Edit Profile]
    H --> J[Change Settings]
    J --> H
    I --> G
    G --> F
