import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../src/components/ui/Button";
import { Input } from "../../src/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../../src/components/ui/Card";
import { Badge } from "../../src/components/ui/Badge";

const meta = {
  title: "Playground/Component Builder",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "İnteraktif komponent oluşturma aracı",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractivePlayground: Story = {
  render: () => {
    const [buttonText, setButtonText] = useState("Click Me");
    const [buttonVariant, setButtonVariant] = useState<'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'>('default');
    const [buttonSize, setButtonSize] = useState<'default' | 'sm' | 'lg' | 'icon'>('default');
    const [inputValue, setInputValue] = useState("");
    const [badgeText, setBadgeText] = useState("Status");
    const [badgeVariant, setBadgeVariant] = useState<'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('default');

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Control Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Control Panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Button Controls */}
            <div>
              <h4 className="font-semibold mb-3">Button Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Text</label>
                  <Input
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    placeholder="Button text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Variant</label>
                  <select 
                    className="w-full p-2 border border-secondary-300 rounded-md"
                    value={buttonVariant}
                    onChange={(e) => setButtonVariant(e.target.value as any)}
                  >
                    <option value="default">Default</option>
                    <option value="secondary">Secondary</option>
                    <option value="outline">Outline</option>
                    <option value="destructive">Destructive</option>
                    <option value="ghost">Ghost</option>
                    <option value="link">Link</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Size</label>
                  <select 
                    className="w-full p-2 border border-secondary-300 rounded-md"
                    value={buttonSize}
                    onChange={(e) => setButtonSize(e.target.value as any)}
                  >
                    <option value="sm">Small</option>
                    <option value="default">Default</option>
                    <option value="lg">Large</option>
                    <option value="icon">Icon</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Badge Controls */}
            <div>
              <h4 className="font-semibold mb-3">Badge Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Text</label>
                  <Input
                    value={badgeText}
                    onChange={(e) => setBadgeText(e.target.value)}
                    placeholder="Badge text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Variant</label>
                  <select 
                    className="w-full p-2 border border-secondary-300 rounded-md"
                    value={badgeVariant}
                    onChange={(e) => setBadgeVariant(e.target.value as any)}
                  >
                    <option value="default">Default</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                    <option value="info">Info</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Input Controls */}
            <div>
              <h4 className="font-semibold mb-3">Input Test</h4>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
              />
              <p className="text-sm text-secondary-600 mt-1">
                Value: "{inputValue}"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preview Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Your Button</h4>
              <div className="p-4 border border-secondary-200 rounded-lg bg-secondary-50">
                <Button 
                  variant={buttonVariant} 
                  size={buttonSize}
                  onClick={() => alert(`Button clicked: ${buttonText}`)}
                >
                  {buttonText}
                </Button>
              </div>
              <div className="mt-2 p-3 bg-secondary-900 text-white rounded text-sm font-mono">
                {`<Button variant="${buttonVariant}" size="${buttonSize}">\n  ${buttonText}\n</Button>`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Your Badge</h4>
              <div className="p-4 border border-secondary-200 rounded-lg bg-secondary-50">
                <Badge variant={badgeVariant}>
                  {badgeText}
                </Badge>
              </div>
              <div className="mt-2 p-3 bg-secondary-900 text-white rounded text-sm font-mono">
                {`<Badge variant="${badgeVariant}">\n  ${badgeText}\n</Badge>`}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Combined Example</h4>
              <div className="p-4 border border-secondary-200 rounded-lg bg-secondary-50 space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant={badgeVariant}>{badgeText}</Badge>
                  <span className="text-secondary-600">with</span>
                  <Button variant={buttonVariant} size="sm">
                    {buttonText}
                  </Button>
                </div>
                <Input placeholder="And an input field..." />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};



