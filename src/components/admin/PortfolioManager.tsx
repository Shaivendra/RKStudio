
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash, Image, Video } from 'lucide-react';

const initialPortfolioItems = [
  {
    id: '1',
    title: 'Elegant Wedding',
    category: 'Wedding',
    type: 'photo',
  },
  {
    id: '2',
    title: 'Studio Portrait',
    category: 'Portrait',
    type: 'photo',
  },
  {
    id: '3',
    title: 'Family Session',
    category: 'Family',
    type: 'photo',
  },
  {
    id: '4',
    title: 'Wedding Highlights',
    category: 'Wedding',
    type: 'video',
  },
];

export const PortfolioManager = () => {
  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: 'photo',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddItem = () => {
    setShowForm(true);
    setFormData({
      title: '',
      category: '',
      type: 'photo',
      description: '',
    });
    setSelectedFile(null);
    setEditingId(null);
  };

  const handleEditItem = (id: string) => {
    const item = portfolioItems.find(item => item.id === id);
    if (item) {
      setFormData({
        title: item.title,
        category: item.category,
        type: item.type,
        description: '',
      });
      setSelectedFile(null);
      setEditingId(id);
      setShowForm(true);
    }
  };

  const handleDeleteItem = (id: string) => {
    setPortfolioItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing item
      setPortfolioItems(prev => 
        prev.map(item => 
          item.id === editingId 
            ? { ...item, ...formData } 
            : item
        )
      );
    } else {
      // Add new item
      const newItem = {
        id: Date.now().toString(),
        ...formData,
      };
      setPortfolioItems(prev => [...prev, newItem]);
    }
    
    setShowForm(false);
    setFormData({
      title: '',
      category: '',
      type: 'photo',
      description: '',
    });
    setSelectedFile(null);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Portfolio Items</h3>
        <Button onClick={handleAddItem} className="bg-teal hover:bg-teal/90">
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>
      
      {showForm && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleSelectChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Portrait">Portrait</SelectItem>
                      <SelectItem value="Family">Family</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Event">Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Media Type</Label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value) => handleSelectChange('type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photo">Photo</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file">Upload {formData.type === 'photo' ? 'Image' : 'Video'}</Label>
                  <Input 
                    id="file" 
                    type="file" 
                    accept={formData.type === 'photo' ? "image/*" : "video/*"} 
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows={4}
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-teal hover:bg-teal/90">
                  {editingId ? 'Update' : 'Add'} Item
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolioItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.type === 'photo' ? (
                    <div className="flex items-center">
                      <Image className="h-4 w-4 mr-2 text-teal" />
                      Photo
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-2 text-orange" />
                      Video
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditItem(item.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDeleteItem(item.id)}
                      className="h-8 w-8 p-0 text-destructive border-destructive hover:bg-destructive/10"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
