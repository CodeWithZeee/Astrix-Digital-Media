/* empty css                                       */
import { c as createComponent, r as renderTemplate } from '../../../chunks/astro/server_DzPnjQAP.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { userService, sessionService } from '../../../utils/database.js';
import { emailService } from '../../../utils/email.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST({ request }) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return new Response(JSON.stringify({ 
        error: 'Email, password, and name are required' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        error: 'Please enter a valid email address' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return new Response(JSON.stringify({ 
        error: 'Password must be at least 8 characters long' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check for strong password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]/;
    if (!passwordRegex.test(password)) {
      return new Response(JSON.stringify({ 
        error: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if user already exists
    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return new Response(JSON.stringify({ 
        error: 'User with this email already exists' 
      }), { 
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = await userService.createUser({ email, password: hashedPassword, name });

    // Send verification email
    const emailSent = await emailService.sendVerificationEmail(
      email, 
      name, 
      newUser.verificationToken
    );

    if (!emailSent) {
      // If email fails, delete the user and return error
      // Note: In production, you might want to handle this differently
      return new Response(JSON.stringify({ 
        error: 'Account created but verification email could not be sent. Please contact support.' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return success response (user needs to verify email)
    return new Response(JSON.stringify({
      success: true,
      message: 'Account created successfully! Please check your email to verify your account.',
      user: {
        id: newUser.id,
        uuid: newUser.uuid,
        email: newUser.email,
        name: newUser.name,
        emailVerified: false
      }
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.message === 'User with this email already exists') {
      return new Response(JSON.stringify({ 
        error: 'User with this email already exists' 
      }), { 
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
--- -->`;
}, "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/register.astro", void 0);

const $$file = "D:/Bolt Astrix redesign/project-bolt-sb1-du4fqyz4 (1)/project/src/pages/api/auth/register.astro";
const $$url = "/api/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
