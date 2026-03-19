import React from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', background: '#050508', color: '#f0f0f5', minHeight: '100vh' }}>
                    <h1 style={{ color: '#a855f7', fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong</h1>
                    <pre style={{ color: '#ec4899', whiteSpace: 'pre-wrap', fontSize: '0.875rem' }}>
                        {this.state.error?.message}
                    </pre>
                    <pre style={{ color: '#9ca3af', whiteSpace: 'pre-wrap', fontSize: '0.75rem', marginTop: '1rem' }}>
                        {this.state.error?.stack}
                    </pre>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
