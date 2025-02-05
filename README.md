# React Router v6 Nested Route Matching Bug

This repository demonstrates a subtle bug in React Router v6 concerning nested route matching.  When defining relative paths in nested routes, the router may unexpectedly fail to match routes, leading to incorrect component rendering.  The solution involves careful consideration of path definitions and potential use of `useLocation` or `useParams` hooks, as demonstrated in this repository. 

## Bug Description

The primary issue occurs when nesting routes and expecting relative paths to work as intended within the parent route.  The router might misinterpret the relative paths, resulting in unexpected route matching behavior. This is especially true when dealing with multiple levels of nested routes.

## Solution

The provided solution addresses the issue by carefully examining and potentially adjusting the path definitions of the nested routes.  In certain cases, using React Router hooks like `useLocation` or `useParams` might provide a more robust way to manage the routing logic within nested components.